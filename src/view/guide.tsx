import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Typography,
} from "@/components/common/index.ts";
import React from "react";

const Paddings = ({ children }: { children: React.ReactNode }) => (
  <div className="p-10">{children}</div>
);

const Guide = () => {
  return (
    <div className="container gap-4">
      <Paddings>
        <Typography variant="h1">H1 Title</Typography>
        <Typography variant="h2">H2 Title</Typography>
        <Typography variant="large">This is a large text.</Typography>
        <Typography variant="paragraph">
          This is a paragraph with default styles.
        </Typography>
        <Typography variant="small">This is small text.</Typography>
        <Typography variant="xsmall">This is extra small text.</Typography>
      </Paddings>
      <Paddings>
        {/* Blue Palette */}
        <div className="bg-blue-900 p-4 text-white">Blue 900 (Active)</div>
        <div className="bg-blue-800 p-4 text-white">Blue 800 (Hover)</div>
        <div className="bg-blue-500 p-4 text-white">Blue 500 (Default)</div>
        <div className="bg-blue-50 p-4 text-black">Blue 50 (Background)</div>

        {/* Gray Palette */}
        <div className="bg-gray-900 p-4 text-white">
          Gray 900 (Primary Text)
        </div>
        <div className="bg-gray-500 p-4 text-white">Gray 500</div>
        <div className="bg-gray-200 p-4 text-black">Gray 200 (Placeholder)</div>
        <div className="bg-gray-50 p-4 text-black">Gray 50 (Background)</div>

        {/* System Colors */}
        <div className="bg-system-red p-4 text-white">Red (Error)</div>
        <div className="bg-system-green p-4 text-white">Green (Success)</div>
        <div className="border bg-system-white p-4 text-black">
          White (Background)
        </div>
      </Paddings>
      <Paddings>
        <h1 className="mb-4 text-2xl font-bold">Responsive Grid</h1>
        <Grid>
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
          <GridItem>4</GridItem>
          <GridItem>5</GridItem>
          <GridItem>6</GridItem>
          <GridItem>7</GridItem>
          <GridItem>8</GridItem>
          <GridItem>9</GridItem>
          <GridItem>10</GridItem>
          <GridItem>11</GridItem>
          <GridItem>12</GridItem>
        </Grid>
      </Paddings>
      <Paddings>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
      </Paddings>
      <Paddings>
        <div className="w-72 flex-col gap-y-10">
          {/* 텍스트 버튼 그룹 */}
          <ButtonGroup
            buttons={[
              { label: "Button 1", onClick: () => console.log("1") },
              { label: "Button 2" },
              { label: "Button 3", disabled: true },
            ]}
          />

          {/* 아이콘 버튼 그룹 (자동 감지) */}
          <ButtonGroup
            buttons={[
              { label: <Typography variant="xsmall">아이</Typography> },
              {
                label: <Typography variant="xsmall">아이</Typography>,
                disabled: true,
              },
            ]}
          />
        </div>
      </Paddings>
    </div>
  );
};

export default Guide;
