import { Routes, Route } from "react-router-dom";
import PostDetailsPage from "./post-details";
import { PostsListPage } from "./posts-list";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsListPage />} />
      <Route path="/:postId" element={<PostDetailsPage />} />
    </Routes>
  );
};
