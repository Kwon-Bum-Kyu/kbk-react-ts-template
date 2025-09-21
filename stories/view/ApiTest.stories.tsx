import type { Meta, StoryObj } from '@storybook/react-vite';
import ApiTest from '@/view/apiTest';

const meta: Meta<typeof ApiTest> = {
  title: 'Pages/ApiTest',
  component: ApiTest,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'API 통신 테스트를 위한 페이지입니다. UserList 컴포넌트를 포함하여 API 기능을 시연합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'API 테스트 페이지의 기본 상태입니다. 모든 섹션이 정상적으로 표시됩니다.',
      },
    },
  },
};

export const MobileView: Story = {
  parameters: {
    docs: {
      description: {
        story: '모바일 뷰포트에서의 API 테스트 페이지입니다.',
      },
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const TabletView: Story = {
  parameters: {
    docs: {
      description: {
        story: '태블릿 뷰포트에서의 API 테스트 페이지입니다.',
      },
    },
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const DesktopView: Story = {
  parameters: {
    docs: {
      description: {
        story: '데스크톱 뷰포트에서의 API 테스트 페이지입니다.',
      },
    },
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const WithDarkTheme: Story = {
  parameters: {
    docs: {
      description: {
        story: '다크 테마가 적용된 API 테스트 페이지입니다.',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
};