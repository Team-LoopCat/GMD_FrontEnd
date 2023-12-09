import { css, styled } from "styled-components";

type sizeEnum = "5XL" | "4XL" |"3XL" | "2XL" | "XL" | "L" | "M" | "S";

interface ButtonProps {
  size: sizeEnum;
}

export const Containers = styled.div<ButtonProps>`
  ${({ size }) =>
    size === "5XL"
      ? css`
          width: 1362px;
          height: 654px;
          padding: 27px;
          font-size: 24px;
          border-radius: 20px;
          box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.25);
        `
      : size === "4XL"
      ? css`
          width: 1135px;
          height: 528px;
          padding: 27px;
          font-size: 24px;
          border-radius: 20px;
          box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.25);
        `
      : size === "3XL"
      ? css`
          width: 942px;
          height: 324px;
          padding: 27px;
          font-size: 24px;
          border-radius: 20px;
          box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.25);
        `
      : size === "2XL"
      ? css`
          width: 375px;
          height: 697px;
          padding: 27px;
          font-size: 24px;
          border-radius: 20px;
          box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.25);
        `
      : size === "XL"
      ? css`
          width: 250px;
          height: 528px;
          padding: 27px;
          font-size: 24px;
          border-radius: 20px;
          box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.25);
        `
      : size === "L"
      ? css`
          width: 250px;
          height: 250px;
          padding: 27px;
          font-size: 24px;
          border-radius: 25px;
          box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.25);
        `
      : size === "S"
      ? css`
          width: 375px;
          height: 85px;
          padding: 27px;
          font-size: 24px;
          border-radius: 20px;
          box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.25);
      `
      : css`
        `}
`;

export const Container = ({ size }: { size: sizeEnum }) => {
  return <Containers size={size}>Your Content Here</Containers>;
};

export default Container;
