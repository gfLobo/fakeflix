import react, { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const HomeListWrapper = styled.div`
  position: relative;
  top: -10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(250px, auto);
  grid-gap: 1rem;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 568px) and (orientation: Landscape) {
    top: -5rem;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 600px) and (orientation: Portrait) {
    top: -20rem;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(225px, auto);
  }

  @media (min-width: 768px) {
    top: -10rem;
    max-width: 120rem;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(350px, auto);
  }

  @media (min-width: 768px) {
    top: -10rem;
    max-width: 120rem;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(276px, auto);
  }

  @media (min-width: 1024px) {
    max-width: 102.4rem;
    grid-auto-rows: minmax(372px, auto);
  }

  @media (min-width: 1280px) {
    max-width: 120rem;
    grid-auto-rows: minmax(438px, auto);
  }

  @media (min-width: 1600px) {
    top: -10rem;
    max-width: 140rem;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: minmax(225px, auto);
  }
`

const HomeCardDiv = styled.div`
  position: relative;
  cursor: pointer;
`

type PropsMovie = {
  title: string,
  overview: string,
  backdrop_path: string,
  poster_path: string,
  vote_average: number,
  id: number
}

type Props = {
  movies: Array<PropsMovie>,
  openModal: (value: boolean, movieId: number) => void
}

type PropsCard = {
  movie: any,
  openModal: (value: boolean, movieId: number) => void
}

const HomeList: FC<Props> = ({ movies, openModal }) => {
  return (
    <>
      <HomeListWrapper>
        { movies && movies.map(movie => <MovieCard key={movie.id} movie={movie} openModal={openModal} />) }
      </HomeListWrapper>
    </>
  )
}

const MovieCard: FC<PropsCard> = ({ movie, openModal }) => {
  return (
    <HomeCardDiv onClick={e => openModal(true, movie.id)}>
      {<Image src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt={movie.title} layout="fill" /> } 
    </HomeCardDiv>
  )
}

export default HomeList