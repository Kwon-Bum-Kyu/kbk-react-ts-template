import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid, GridItem, Typography, Button, Input } from '@/components/common';
import Pagination from '@/components/common/Pagenation';

// Mock UserList component with common components for Storybook
const MockUserList = ({ state }: { state: 'loading' | 'error' | 'empty' | 'success' | 'deleting' }) => {
  const mockUsers = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "user" as const,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "admin" as const,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "user" as const,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
  ];

  if (state === 'loading') {
    return (
      <div className="p-4">
        <Typography variant="paragraph" className="text-gray-600">
          사용자 목록을 불러오는 중...
        </Typography>
      </div>
    );
  }

  if (state === 'error') {
    return (
      <div className="p-4">
        <Typography variant="paragraph" className="text-red-600 mb-4">
          오류가 발생했습니다: 네트워크 연결을 확인해주세요.
        </Typography>
        <Button variant="primary">
          다시 시도
        </Button>
      </div>
    );
  }

  if (state === 'empty') {
    return (
      <div className="p-4">
        <Typography variant="h2" className="mb-6">
          사용자 목록
        </Typography>

        {/* 검색 폼 */}
        <div className="mb-6">
          <Grid>
            <GridItem className="col-span-3 tablet:col-span-4 desktop:col-span-8">
              <Input
                type="text"
                placeholder="사용자 검색..."
                className="w-full"
              />
            </GridItem>
            <GridItem className="col-span-1 tablet:col-span-2 desktop:col-span-4">
              <Button variant="primary" className="w-full">
                검색
              </Button>
            </GridItem>
          </Grid>
        </div>

        <div className="text-center py-8">
          <Typography variant="paragraph" className="text-gray-500">
            사용자가 없습니다.
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <Typography variant="h2" className="mb-6">
        사용자 목록
      </Typography>

      {/* 검색 폼 */}
      <div className="mb-6">
        <Grid>
          <GridItem className="col-span-3 tablet:col-span-4 desktop:col-span-8">
            <Input
              type="text"
              placeholder="사용자 검색..."
              className="w-full"
            />
          </GridItem>
          <GridItem className="col-span-1 tablet:col-span-2 desktop:col-span-4">
            <Button variant="primary" className="w-full">
              검색
            </Button>
          </GridItem>
        </Grid>
      </div>

      {/* 사용자 목록 */}
      <div className="space-y-4">
        <Grid>
          {mockUsers.map((user) => (
            <GridItem
              key={user.id}
              className="col-span-4 tablet:col-span-6 desktop:col-span-12 p-4 border rounded-lg bg-white shadow-sm"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex-1">
                  <Typography variant="h5" className="mb-1">
                    {user.name}
                  </Typography>
                  <Typography variant="paragraph" className="text-gray-600 mb-1">
                    {user.email}
                  </Typography>
                  <Typography variant="small" className="text-gray-500">
                    Role: {user.role}
                  </Typography>
                </div>
                <div className="ml-4">
                  <Button
                    disabled={state === 'deleting'}
                    variant="secondary"
                    className="bg-red-500 text-white hover:bg-red-600 disabled:opacity-50"
                  >
                    {state === 'deleting' ? '삭제 중...' : '삭제'}
                  </Button>
                </div>
              </div>
            </GridItem>
          ))}
        </Grid>

        {/* 페이지네이션 */}
        <div className="flex justify-center mt-6">
          <Pagination
            current={1}
            total={3}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof MockUserList> = {
  title: 'Examples/UserList',
  component: MockUserList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
API 통신을 통한 사용자 목록 관리 컴포넌트입니다.

**사용된 Common 컴포넌트:**
- **Grid & GridItem**: 반응형 레이아웃 시스템
- **Typography**: 일관된 텍스트 스타일링
- **Button**: 표준화된 버튼 컴포넌트
- **Input**: 통합된 입력 필드
- **Pagination**: 페이지네이션 컨트롤

**주요 기능:**
- useApi와 useMutation 훅을 사용한 데이터 관리
- 반응형 그리드 레이아웃
- 검색 기능
- 페이지네이션
- 로딩/에러 상태 처리
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['loading', 'error', 'empty', 'success', 'deleting'],
      description: '컴포넌트의 상태를 선택합니다',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: '기본 상태의 사용자 목록입니다. Grid 시스템을 사용하여 반응형 레이아웃을 구현하고, Typography와 Button 컴포넌트로 일관된 디자인을 제공합니다.',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    state: 'loading',
  },
  parameters: {
    docs: {
      description: {
        story: '데이터를 불러오는 중인 상태입니다. Typography 컴포넌트를 사용하여 로딩 메시지를 표시합니다.',
      },
    },
  },
};

export const Empty: Story = {
  args: {
    state: 'empty',
  },
  parameters: {
    docs: {
      description: {
        story: '사용자 데이터가 없는 상태입니다. 검색 폼은 여전히 표시되며, Empty 상태 메시지가 Typography로 표현됩니다.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    state: 'error',
  },
  parameters: {
    docs: {
      description: {
        story: '데이터 로딩 중 오류가 발생한 상태입니다. 에러 메시지와 재시도 Button이 표시됩니다.',
      },
    },
  },
};

export const DeletingUser: Story = {
  args: {
    state: 'deleting',
  },
  parameters: {
    docs: {
      description: {
        story: '사용자 삭제 중인 상태입니다. Button 컴포넌트의 disabled 상태와 로딩 텍스트가 표시됩니다.',
      },
    },
  },
};

export const ResponsiveLayout: Story = {
  args: {
    state: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid 시스템의 반응형 레이아웃을 확인할 수 있습니다. 화면 크기에 따라 col-span이 자동으로 조정됩니다.',
      },
    },
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const TypographyShowcase: Story = {
  args: {
    state: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Typography 컴포넌트의 다양한 variant(h2, h5, paragraph, small)가 사용된 모습을 보여줍니다.',
      },
    },
  },
};

export const ButtonVariants: Story = {
  args: {
    state: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button 컴포넌트의 primary, secondary variant와 custom className 적용 예시를 보여줍니다.',
      },
    },
  },
};