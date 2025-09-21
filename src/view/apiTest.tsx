import React from 'react';
import { UserList } from '@/components/examples/UserList';

const ApiTest: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              API 통신 테스트 페이지
            </h1>
            <p className="text-gray-600">
              API 코어 모듈을 사용한 실제 데이터 통신 테스트 페이지입니다.
            </p>
          </header>

          <div className="grid gap-8">
            <section className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  사용자 관리 테스트
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  UserService와 API hooks를 사용한 CRUD 작업 테스트
                </p>
              </div>
              <div className="p-6">
                <UserList />
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  API 기능 설명
                </h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      구현된 기능
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        사용자 목록 조회 (페이지네이션)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        사용자 검색 기능
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        사용자 삭제 (Mutation)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        로딩 상태 관리
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        에러 핸들링
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      사용된 기술
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        useApi Hook (데이터 페칭)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        useMutation Hook (데이터 수정)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        UserService (API 서비스)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        TypeScript 타입 안전성
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        자동 재시도 및 에러 처리
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  개발자 정보
                </h2>
              </div>
              <div className="p-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>주의:</strong> 이 페이지는 실제 API 서버가 필요합니다.
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <code className="bg-gray-200 px-2 py-1 rounded text-xs">
                      VITE_API_BASE_URL
                    </code> 환경 변수를 설정하여 API 서버 주소를 지정하세요.
                  </p>
                  <p className="text-sm text-gray-600">
                    현재 설정: <span className="font-mono text-xs bg-gray-200 px-2 py-1 rounded">
                      {import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'}
                    </span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiTest;