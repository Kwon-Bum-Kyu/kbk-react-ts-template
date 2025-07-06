import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid, GridItem } from "@/components/common/Grid";

/**
 * Grid 컴포넌트는 반응형 레이아웃을 쉽게 구성할 수 있도록 도와줍니다.
 * 모바일, 태블릿, 데스크톱 화면 크기에 따라 자동으로 컬럼 수가 조절됩니다.
 */
const meta: Meta<typeof Grid> = {
  title: "Common/Grid",
  component: Grid,
  tags: ["autodocs"],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: "반응형 그리드 시스템을 제공하는 레이아웃 컴포넌트입니다.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: () => (
    <Grid>
      {[...Array(12)].map((_, i) => (
        <GridItem key={i} className="bg-blue-50 text-center">
          {i + 1}
        </GridItem>
      ))}
    </Grid>
  ),
};
