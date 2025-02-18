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
          <Route path="artist" element={<ArtistPage />} />
          <Route path="album" element={<AlbumPage />} />
          <Route path="radio" element={<RadioPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
