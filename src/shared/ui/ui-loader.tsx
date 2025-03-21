import { Box, SxProps, Theme } from "@mui/material";
import { useEffect, useRef } from "react";
import { gray } from "../theme/theme-primitives";

type Props = {
  sx?: SxProps<Theme>;
};

export const UiLoader = ({ sx }: Props) => {
  const ref = useRef<SVGSVGElement | null>(null);
  const angle = useRef(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const rotate = () => {
      angle.current += 1;
      if (angle.current === 360) {
        angle.current = 0;
      }

      if (ref.current) {
        ref.current.style.transform = `rotate(${angle.current}deg)`;
      }
      animationRef.current = requestAnimationFrame(rotate);
    };

    rotate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);
  return (
    <Box
      component="div"
      sx={{
        display: "inline-block",
        width: "24px",
        height: "24px",

        ...sx,
      }}
    >
      <svg
        ref={ref}
        style={{
          width: "100%",
          height: "100%",
          fill: gray[50],
        }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C11.4477 2 11 2.44772 11 3V6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6V3C13 2.44772 12.5523 2 12 2Z" />
        <path d="M12 17C11.4477 17 11 17.4477 11 18V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V18C13 17.4477 12.5523 17 12 17Z" />
        <path d="M21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H18C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11H21Z" />
        <path d="M7 12C7 11.4477 6.55228 11 6 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H6C6.55228 13 7 12.5523 7 12Z" />
        <path d="M17.6569 4.92903C18.0474 4.53851 18.6806 4.53851 19.0711 4.92903C19.4616 5.31955 19.4616 5.95272 19.0711 6.34324L16.9498 8.46456C16.5593 8.85509 15.9261 8.85509 15.5356 8.46456C15.1451 8.07404 15.1451 7.44088 15.5356 7.05035L17.6569 4.92903Z" />
        <path d="M8.46443 15.5355C8.07391 15.145 7.44074 15.145 7.05022 15.5355L4.9289 17.6568C4.53837 18.0473 4.53837 18.6805 4.9289 19.071C5.31942 19.4615 5.95259 19.4615 6.34311 19.071L8.46443 16.9497C8.85496 16.5592 8.85496 15.926 8.46443 15.5355Z" />
        <path d="M19.0711 17.6569C19.4616 18.0474 19.4616 18.6806 19.0711 19.0711C18.6806 19.4616 18.0474 19.4616 17.6569 19.0711L15.5356 16.9498C15.145 16.5593 15.145 15.9261 15.5356 15.5356C15.9261 15.1451 16.5592 15.1451 16.9498 15.5356L19.0711 17.6569Z" />
        <path d="M8.46452 8.46443C8.85505 8.07391 8.85505 7.44074 8.46452 7.05022L6.3432 4.9289C5.95268 4.53837 5.31951 4.53837 4.92899 4.9289C4.53847 5.31942 4.53847 5.95259 4.92899 6.34311L7.05031 8.46443C7.44083 8.85495 8.074 8.85495 8.46452 8.46443Z" />
      </svg>
    </Box>
  );
};
