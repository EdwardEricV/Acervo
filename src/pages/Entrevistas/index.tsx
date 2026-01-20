import Entre from '../../components/Entrevista'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

const Home = () => {
  return (
    <>
      <Entre />
    </>
  )
}

export default Home
