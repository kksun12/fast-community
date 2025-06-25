import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./layouts/Layout";

function App() {
  const [count, setCount] = useState(0);

  const posts = [
    {
      id: 1,
      title: "첫 번째 게시물",
      author: "작성자1",
      createdAt: "2024-05-21",
    },
    {
      id: 2,
      title: "두 번째 게시물",
      author: "작성자2",
      createdAt: "2024-05-20",
    },
    {
      id: 3,
      title: "세 번째 게시물",
      author: "작성자3",
      createdAt: "2024-05-19",
    },
    {
      id: 4,
      title: "네 번째 게시물",
      author: "작성자4",
      createdAt: "2024-05-18",
    },
    {
      id: 5,
      title: "다섯 번째 게시물",
      author: "작성자5",
      createdAt: "2024-05-17",
    },
    {
      id: 6,
      title: "여섯 번째 게시물",
      author: "작성자6",
      createdAt: "2024-05-16",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              커뮤니티 사이트
            </h1>
            <p className="text-gray-600">총 {posts.length}개의 게시물</p>
          </div>
          {/* 게시물 목록 */}
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span>작성자: {post.author}</span>
                      <span>•</span>
                      <span>{post.createdAt}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      게시물
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 글쓰기 버튼 */}
          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              새 글 작성
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
