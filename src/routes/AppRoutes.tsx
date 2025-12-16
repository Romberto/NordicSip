import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import UnderConstruction from '../features/pages/UnderConstruction';
import Header from '../features/components/Header';
import MobileMenu from '../features/components/MobileMenu';
import { BlogPostPage } from '../features/pages/BlogPostPage';
import Footer from '../features/components/Footer';
import HomePage from '../features/pages/HomePage';
import CatalogPage from '../features/pages/CatalogPage';
import BlogPage from '../features/pages/BlogPage';
import ProjectDetailPage from '../features/pages/ProjectDetailPage';


// Removed imports for missing modules to fix errors
const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Проекты', path: '/catalog' },
  { label: 'Блог', path: '/blog' },
  { label: 'Контакты', path: '/contacts' },
];

// Страница-заглушка (ранее navState SERVICES/CONTACTS)
const StubPage: React.FC = () => {
  const navigate = useNavigate();
  return <UnderConstruction onBack={() => navigate('/')} />;
};

const AppRoutes: React.FC = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      {/* Header */}
      <Header
        navItems={navItems}
        isMobileMenuOpen={isMobileMenuOpen}
        onNavigate={(path) => {
          navigate(path);
          setIsMobileMenuOpen(false);
        }}
        onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
      />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu
          navItems={navItems}
          onNavigate={(path) => {
            navigate(path);
            setIsMobileMenuOpen(false);
          }}
        />
      )}

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<ProjectDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/contacts" element={<StubPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onNavigate={(path) => navigate(path)} />
    </div>
  );
};

export default AppRoutes;
