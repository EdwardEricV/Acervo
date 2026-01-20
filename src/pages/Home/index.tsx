import Desc from '../../components/Descriacao'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

const Home = () => {
  return (
    <>
      <Desc />
    </>
  )
}

export default Home
