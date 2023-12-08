import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../HomePage";
import { BlogPage } from "../BlogPage";
import { ProfilePage } from "../ProfilePage";
import { Menu } from "../Menu";
import { BlogPost } from "../BlogPost";
import { LoginPage } from "../LoginPage";
import { LogoutPage } from "../LogoutPage";
import { AuthProvider, AuthRoute } from "../auth";
import { PostForm } from "../PostForm";
import { BlogProvider } from "../hooks/useBlogData";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Menu />
        <BlogProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
              <Route path="new-post" element={<PostForm />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/logout"
              element={
                <AuthRoute redirect="/login">
                  <LogoutPage />
                </AuthRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRoute redirect="/login">
                  <ProfilePage />
                </AuthRoute>
              }
            />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </BlogProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
