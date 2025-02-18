import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import MediaPlayerLayout from './assets/layouts/MediaPlayerLayout'
import AlbumPage from './assets/pages/AlbumPage'
import ArtistPage from './assets/pages/ArtistPage'
import ForYouPage from './assets/pages/ForYouPage'
import NotFoundPage from './assets/pages/NotFoundPage'
import RadioPage from './assets/pages/RadioPage'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MediaPlayerLayout />}>
          <Route index element={<ForYouPage />} />
          <Route path="artists/:slug/:id" element={<ArtistPage />} />
          <Route path="albums/:slug/:id" element={<AlbumPage />} />
          <Route path="radios/:slug/:id" element={<RadioPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
