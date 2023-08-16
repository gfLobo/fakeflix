import react, { FC, useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'

import Image from 'next/image'

import { MdClose } from 'react-icons/md';

// redux toolkit:
import { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovieById } from '../reducers/movieById'
import { eraser } from '../reducers/movieById'

const Background = styled('div')`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

const ModalWrapper = styled('div')`
  box-sizing: border-box;
  padding: 0;
  width: 100%;
  max-width: 90%;
  max-height: 90vh;
  color: #fff;
  position: relative;
  z-index: 10;
  background-color: #141414;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 2rem;
  z-index: @zindex--fixed;
  font-size: 1.4rem;

  &::-webkit-scrollbar-track {
    border: none;
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: .4rem;
    height: .4rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: silver;
    border-radius: .4rem;
  }

  -ms-overflow-style: -ms-autohiding-scrollbar;
  scrollbar-width: thin;

  @media (min-width: 960px) {
    max-width: 92rem;
    max-height: 90vh;
    font-size: 1.6rem;
  }

  @media (min-width: 1024px) {
    max-width: 100rem;
  }

  @media (min-width: 1500px) {
    max-width: 128rem;
    max-height: 80vh;
  }

  .bg {
    position: relative;
    overflow: hidden;
    height: 25rem;

    @media (min-width: 768px) {
      height: 51.75rem;
    }

    @media (min-width: 1024px) {
      height: 56rem;
    }

    @media (min-width: 1500px) {
      height: 72rem;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 15rem;
      background-image: linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);
    }

    .titles {
      position: absolute;
      z-index: 1;
      bottom: 2rem;
      left: 2rem;
      color: #fff;

      @media (min-width: 1024px) {
        left: 4rem;
      }
    
      h2 {
        font-size: 2rem;
        margin: 0 0 1rem;

        @media (min-width: 1024px) {
          font-size: 3rem;
        }
      }
  
      h3 {
        font-size: 1.4rem;
        text-variant: italic;
        margin: 0;

        @media (min-width: 1024px) {
          font-size: 2rem;
        }
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    color: silver;
    padding: 1rem 2rem 2rem;
    line-height: 1.4;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }

    @media (min-width: 960px) {
      padding: 1rem 4rem 4rem;
    }

    .info__main {
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        margin-bottom: 0;
        width: 60%;
      }
    }

    .info__meta {
      @media (min-width: 768px) {
        width: 30%;
      }
    }

    p {
      margin: 0 0 1rem;

      &:last-child {
        margin: 0;
      }
    }

    li {
      margin: 0 0 .5rem;

      &:last-child {
        margin: 0;
      }
    }

    strong {
      font-weight: 600;
      font-size: 90%;
    }

    small {
      font-size: 90%;
      font-weight: 200;
    }

    .votes {
      font-size: 90%;
      line-height: 1;
      color: #141414;
      background-color: silver;
      border-radius: 100%;
      width: 3rem;
      height: 3rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin: 0 1rem 0 0;
    }
  }
`
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`
type PropsMovie = {
  title: string,
  overview: string,
  backdrop_path: string,
  poster_path: string,
  vote_average: number,
  id: number
}

type PropsModalContent = {
  //movie: Array<PropsMovie>
  movie: any
}

type PropsModal = {
  showModal: boolean,
  movieId: number,
  setShowModal: (value: boolean) => void,
}

const ModalMovie: FC<PropsModal> = ({ showModal, setShowModal, movieId }) => {
  const modalRef = useRef(null)
  const movie = useSelector((state: RootState) => state.movie)
  const dispatch = useDispatch()

  const closeModal = (e:any):void => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  const closeModalActions = (e:any):void => {
    dispatch(eraser())
    setShowModal(false)
  }

  const keyPress = useCallback(
    (e):void => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    }, [setShowModal, showModal]
  )


  useEffect( () => {
      document.addEventListener('keydown', keyPress)
      return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress]
  )

  useEffect(() => { 
    dispatch(fetchMovieById(movieId))
  }, [dispatch, movieId])

  return (
    <>
    {showModal && (
      <Background onClick={closeModal} ref={modalRef}>
        <ModalWrapper>
          { movie.result && (movie.result).map(movie => <ModalContent key={movie.id} movie={movie}/>) }
          <CloseModalButton aria-label='Close modal' onClick={(e)=> closeModalActions(e)} />
        </ModalWrapper>
      </Background>
    )}
  </>
  )
}

const ModalContent: FC<PropsModalContent> = ({ movie }) => {
  return (
    <>
      <div className="bg">
        <Image src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={movie.title} layout="fill" />
        <div className="titles">
          <h2>{movie.title}</h2>
          <h3>{movie.tagline}</h3>
        </div>
      </div>
      <div className="info">
        <div className="info__main">
          <p>{movie.overview}</p>
        </div>
        <div className="info__meta">
          <p><span className="votes">{movie.vote_average}</span> <small>total votes: {movie.vote_count}</small></p>
          <ul>
            <li><strong>Release:</strong> {movie.release_date}</li>
            <li><strong>Website:</strong> {movie.homepage}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ModalMovie