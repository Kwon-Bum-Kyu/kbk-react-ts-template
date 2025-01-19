import Grid from "@/components/common/grid.tsx";
import GridItem from "@/components/common/gridItem.tsx";
import Typography from "@/components/common/typography.tsx";

const Guide = () => {
  return (
    <>
      <div>
        <Typography variant="h1">H1 Title</Typography>
        <Typography variant="h2">H2 Title</Typography>
        <Typography variant="large">This is a large text.</Typography>
        <Typography variant="paragraph">
          This is a paragraph with default styles.
        </Typography>
        <Typography variant="small">This is small text.</Typography>
        <Typography variant="xsmall">This is extra small text.</Typography>

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
        <div className="bg-system-white border p-4 text-black">
          White (Background)
        </div>
        <div className="p-8">
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
        </div>
      </div>
    </>
  );
};

export default Guide;
