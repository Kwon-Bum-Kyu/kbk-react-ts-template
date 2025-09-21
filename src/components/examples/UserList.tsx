import React, { useState } from 'react';
import { useApi, useMutation } from '@/hooks';
import { UserService } from '@/services';
import { User } from '@/types/user';
import { Grid, GridItem, Typography, Button, Input } from '@/components/common';
import Pagination from '@/components/common/Pagenation';

export const UserList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const {
    data: usersData,
    loading,
    error,
    refetch,
  } = useApi(
    () => UserService.getUsers({ page, limit: 10, search }),
    {
      immediate: true,
      onSuccess: (data) => {
        console.log('Users loaded:', data);
      },
      onError: (error) => {
        console.error('Failed to load users:', error);
      },
    }
  );

  const deleteUserMutation = useMutation(
    (userId: string) => UserService.deleteUser(userId),
    {
      onSuccess: () => {
        alert('사용자가 삭제되었습니다.');
        refetch();
      },
      onError: (error) => {
        alert(`삭제 실패: ${error.message}`);
      },
    }
  );

  const handleDeleteUser = (userId: string) => {
    if (window.confirm('정말로 이 사용자를 삭제하시겠습니까?')) {
      deleteUserMutation.mutate(userId);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    refetch();
  };

  if (loading) {
    return (
      <div className="p-4">
        <Typography variant="paragraph" className="text-gray-600">
          사용자 목록을 불러오는 중...
        </Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <Typography variant="paragraph" className="text-red-600 mb-4">
          오류가 발생했습니다: {error.message}
        </Typography>
        <Button onClick={refetch} variant="primary">
          다시 시도
        </Button>
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
        <form onSubmit={handleSearch}>
          <Grid>
            <GridItem className="col-span-3 tablet:col-span-4 desktop:col-span-8">
              <Input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="사용자 검색..."
                className="w-full"
              />
            </GridItem>
            <GridItem className="col-span-1 tablet:col-span-2 desktop:col-span-4">
              <Button type="submit" variant="primary" className="w-full">
                검색
              </Button>
            </GridItem>
          </Grid>
        </form>
      </div>

      {/* 사용자 목록 */}
      {usersData?.data && usersData.data.length > 0 ? (
        <div className="space-y-4">
          <Grid>
            {usersData.data.map((user: User) => (
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
                      onClick={() => handleDeleteUser(user.id)}
                      disabled={deleteUserMutation.loading}
                      variant="secondary"
                      className="bg-red-500 text-white hover:bg-red-600 disabled:opacity-50"
                    >
                      {deleteUserMutation.loading ? '삭제 중...' : '삭제'}
                    </Button>
                  </div>
                </div>
              </GridItem>
            ))}
          </Grid>

          {/* 페이지네이션 */}
          {usersData.pagination && usersData.pagination.totalPages > 1 && (
            <div className="flex justify-center mt-6">
              <Pagination
                current={page}
                total={usersData.pagination.totalPages}
                onChange={setPage}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-8">
          <Typography variant="paragraph" className="text-gray-500">
            사용자가 없습니다.
          </Typography>
        </div>
      )}
    </div>
  );
};