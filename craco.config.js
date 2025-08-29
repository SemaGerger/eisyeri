const path = require('path');

module.exports = {
  webpack: {
    alias: {
      // Components
      '@components': path.resolve(__dirname, 'src/components/'),
      '@components/header': path.resolve(__dirname, 'src/components/header/'),
      '@components/hero': path.resolve(__dirname, 'src/components/hero/'),
      '@components/mainContent': path.resolve(__dirname, 'src/components/mainContent/'),
      '@components/common': path.resolve(__dirname, 'src/components/common/'),
      '@components/footer': path.resolve(__dirname, 'src/components/footer/'),
      '@components/navbar': path.resolve(__dirname, 'src/components/navbar/'),
      '@components/admin': path.resolve(__dirname, 'src/components/admin/'),
      '@components/test': path.resolve(__dirname, 'src/components/test/'),
      '@components/layout': path.resolve(__dirname, 'src/components/layout/'),

      // Pages
      '@pages': path.resolve(__dirname, 'src/pages/'),

      // Assets
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@assets/images': path.resolve(__dirname, 'src/assets/images/'),
      '@assets/videos': path.resolve(__dirname, 'src/assets/videos/'),
      '@assets/logos': path.resolve(__dirname, 'src/assets/logos/'),

      // API
      '@api': path.resolve(__dirname, 'src/api/'),

      // Data
      '@data': path.resolve(__dirname, 'src/data/'),

      // Hooks
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
    }
  }
};
