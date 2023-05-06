import React, { useEffect } from "react";
import styled from "styled-components";

interface CanvasBackgroundProps {
  id: string;
}
//still under development for animated background
export const CanvasBackground = ({ id }: CanvasBackgroundProps) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [canvasContext, setCanvasContext] =
    React.useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const starsCtx = canvas.getContext("2d");
      setCanvasContext(starsCtx);
    }
  }, []);

  return <StyledCanvas ref={canvasRef} id={id} />;
};

const StyledCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`;
