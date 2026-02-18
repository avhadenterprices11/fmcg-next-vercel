"use client";

import { useRef, useState } from "react";
import {
    upload,
    ImageKitAbortError,
    ImageKitInvalidRequestError,
    ImageKitServerError,
    ImageKitUploadNetworkError
} from "@imagekit/next";
import { Button } from "@/components/ui/button";
import { Loader2, Trash, UploadCloud, Eye, Crop, Settings2 } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { TagsInput } from "@/components/ui/tags-input";
import ImageCropper from "./image-cropper";
import ImageViewer from "./image-viewer";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";

interface ImageUploadProps {
    value: string;
    onChange: (url: string) => void;
    disabled?: boolean;
}

export default function ImageUpload({ value, onChange, disabled }: ImageUploadProps) {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isCropping, setIsCropping] = useState(false);
    const [isViewing, setIsViewing] = useState(false);
    const [tempFile, setTempFile] = useState<string | null>(null); // For cropper
    const [tags, setTags] = useState<string[]>([]);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const abortControllerRef = useRef<AbortController | null>(null);

    const authenticator = async () => {
        try {
            const response = await fetch("/api/auth/imagekit");
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Request failed with status ${response.status}: ${errorText}`);
            }
            const data = await response.json();
            const { signature, expire, token, publicKey } = data;
            return { signature, expire, token, publicKey };
        } catch (error) {
            console.error("Authentication error:", error);
            throw new Error("Authentication request failed");
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        console.log("File selected:", file);
        if (!file) return;

        // Create a URL for the file to pass to the cropper
        const fileUrl = URL.createObjectURL(file);
        console.log("File URL created:", fileUrl);
        setTempFile(fileUrl);
        setIsCropping(true);
        console.log("Setting isCropping to true");

        // Reset input so same file can be selected again
        e.target.value = "";
    };

    const handleCropComplete = async (croppedBlob: Blob) => {
        setIsCropping(false);
        if (tempFile) {
            URL.revokeObjectURL(tempFile);
            setTempFile(null);
        }
        await handleUpload(croppedBlob);
    };

    const handleCropCancel = () => {
        setIsCropping(false);
        if (tempFile) {
            URL.revokeObjectURL(tempFile);
            setTempFile(null);
        }
    };

    const handleUpload = async (fileBlob: Blob) => {
        try {
            setUploading(true);
            setProgress(0);

            abortControllerRef.current = new AbortController();

            const authParams = await authenticator();
            const { signature, expire, token, publicKey } = authParams;

            const uploadResponse = await upload({
                file: fileBlob,
                fileName: "uploaded-image.jpg", // ImageKit will handle uniqueness
                expire,
                token,
                signature,
                publicKey,
                useUniqueFileName: true,
                folder: "/trade-offers",
                tags: tags, // Add tags to upload
                onProgress: (event) => {
                    setProgress(Math.round((event.loaded / event.total) * 100));
                },
                abortSignal: abortControllerRef.current.signal,
            });

            console.log("Upload success:", uploadResponse);
            if (uploadResponse.url) {
                onChange(uploadResponse.url);
                toast.success("Image uploaded successfully");
            } else {
                toast.error("Upload failed: No URL returned");
            }

        } catch (error: any) {
            console.error("Upload error:", error);

            if (error instanceof ImageKitAbortError) {
                toast.info("Upload cancelled");
            } else if (error instanceof ImageKitInvalidRequestError) {
                toast.error(`Invalid request: ${error.message}`);
            } else if (error instanceof ImageKitUploadNetworkError) {
                toast.error(`Network error: ${error.message}`);
            } else if (error instanceof ImageKitServerError) {
                toast.error(`Server error: ${error.message}`);
            } else {
                toast.error("Image upload failed. Please try again.");
            }
        } finally {
            setUploading(false);
            setProgress(0);
            abortControllerRef.current = null;
        }
    };

    const handleRemove = () => {
        onChange("");
    };

    const handleCancel = () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
    };

    const triggerUpload = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="space-y-4 w-full flex flex-col items-center justify-center">
            {/* Hidden Input */}
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileSelect}
                disabled={disabled || uploading}
            />

            {/* PREVIEW AREA */}
            {value ? (
                <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-border shadow-sm group bg-background">
                    <div className="relative w-full h-full transition-all duration-500 group-hover:scale-105">
                        <Image
                            fill
                            src={value}
                            alt="Upload Preview"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>

                    {/* Overlay Metadata & Actions */}
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between">
                        <div className="text-white">
                            <p className="text-sm font-medium">Uploaded Image</p>
                            <p className="text-xs text-white/60">Ready for use</p>
                        </div>
                        <div className="flex gap-2">
                            <Button
                                type="button"
                                variant="secondary"
                                size="icon"
                                onClick={() => setIsViewing(true)}
                                className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white shadow-lg transition-all duration-200 hover:scale-110"
                                title="View Full Image"
                            >
                                <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                onClick={handleRemove}
                                disabled={disabled}
                                className="h-9 w-9 rounded-full bg-red-500/80 hover:bg-red-500 backdrop-blur-md text-white shadow-lg transition-all duration-200 hover:scale-110"
                                title="Remove Image"
                            >
                                <Trash className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                /* UPLOAD AREA */
                <div className="w-full space-y-4">
                    <div
                        onClick={triggerUpload}
                        className={`
                            relative flex flex-col items-center justify-center w-full h-80 
                            rounded-2xl cursor-pointer overflow-hidden
                            border-2 border-dashed border-border
                            bg-muted/30 
                            hover:bg-muted/50 
                            hover:border-primary/50
                            transition-all duration-300 group
                            ${disabled || uploading ? "pointer-events-none opacity-80" : ""}
                        `}
                    >
                        {/* Animated Mesh Gradient Background (Subtle) */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

                        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4 relative z-10">
                            {uploading ? (
                                <div className="flex flex-col items-center w-full max-w-[240px] gap-4">
                                    <div className="relative w-16 h-16">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle
                                                cx="32"
                                                cy="32"
                                                r="28"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                fill="transparent"
                                                className="text-muted"
                                            />
                                            <circle
                                                cx="32"
                                                cy="32"
                                                r="28"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                fill="transparent"
                                                strokeDasharray={175.93} // 2 * pi * 28
                                                strokeDashoffset={175.93 - (175.93 * progress) / 100}
                                                className="text-primary transition-all duration-300 ease-in-out"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-sm font-semibold text-primary">{progress}%</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium text-foreground">
                                            Uploading media...
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Please wait while we process your file
                                        </p>
                                    </div>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="h-7 text-xs text-red-500 hover:text-red-600 hover:bg-red-500/10"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleCancel();
                                        }}
                                    >
                                        Cancel Upload
                                    </Button>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-4 p-4 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 shadow-sm border border-primary/20">
                                        <UploadCloud className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-base font-semibold text-foreground">
                                            Click to upload or drag and drop
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            SVG, PNG, JPG or GIF (max. 5MB)
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Advanced Options Bar */}
                    {/* <div className="flex items-center justify-between px-1">
                        <span className="text-xs text-muted-foreground font-medium">Supported formats: High Quality Images</span>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 gap-2 text-xs border-dashed text-muted-foreground hover:text-foreground"
                                >
                                    <Settings2 className="h-3.5 w-3.5" />
                                    Image Settings
                                    {tags.length > 0 && (
                                        <span className="ml-1 rounded-full bg-primary w-4 h-4 text-[10px] flex items-center justify-center text-primary-foreground font-bold">
                                            {tags.length}
                                        </span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 p-4" align="end">
                                <div className="space-y-4">
                                    <div className="space-y-1.5">
                                        <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Auto-Tags</Label>
                                        <TagsInput
                                            value={tags}
                                            onValueChange={setTags}
                                            placeholder="Add tags..."
                                            maxItems={5}
                                            className="bg-background"
                                        />
                                        <p className="text-[10px] text-muted-foreground">
                                            Tags allow you to organize and filter images later.
                                        </p>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div> */}
                </div>
            )}

            {/* Modals */}
            {tempFile && (
                <ImageCropper
                    open={isCropping}
                    imageSrc={tempFile}
                    onClose={handleCropCancel}
                    onCropComplete={handleCropComplete}
                />
            )}

            {value && (
                <ImageViewer
                    open={isViewing}
                    imageSrc={value}
                    onClose={() => setIsViewing(false)}
                />
            )}
        </div>
    );
}

