import { useId, useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { gray } from "../theme/theme-primitives";
import { UploadFile } from "@mui/icons-material";

type FileDropzoneProps = {
  onFilesSelected: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
};

export const UiFileDropzone = ({
  onFilesSelected,
  multiple,
  accept,
}: FileDropzoneProps) => {
  const themeColor = useTheme().palette.mode;
  const [dragging, setDragging] = useState(false);
  const id = useId();

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    onFilesSelected([...files]);
  };

  return (
    <Box
      sx={{
        border: "2px dashed",
        borderColor: dragging ? "primary.main" : "transparent",
        borderRadius: "16px",
        p: 4,
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: themeColor === "light" ? gray[300] : gray[800],
        transition: "background-color 0.2s",
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        handleFiles(e.dataTransfer.files);
      }}
    >
      <input
        type="file"
        multiple={multiple}
        hidden
        id={id}
        onChange={(e) => handleFiles(e.target.files)}
        accept={accept}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <UploadFile sx={{ color: gray[600] }} />
        <Typography
          variant="caption2"
          sx={{
            color: gray[600],
          }}
        >
          PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
        </Typography>

        <label htmlFor={id}>
          <Button
            variant="contained"
            component="span"
            sx={{ backgroundColor: gray[50] }}
          >
            Chosen file
          </Button>
        </label>
      </Box>
    </Box>
  );
};
