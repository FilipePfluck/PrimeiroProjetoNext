import {  GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'

import SEO from '@/components/SEO'

import * as S from '../styles/pages/home'

interface Products {
  id: string,
  title: string
}

interface HomeProps {
  recommendedProducts: Products[]
}

export default function Home({ recommendedProducts }: HomeProps) {


  return (
    <S.Container>
      <SEO title="Home" shouldExcludeTitleSuffix/>

      <section>
        <h1>Products</h1>

        <ul>
          {recommendedProducts.map(products => (
            <li key={products.id}>
              {products.title}
            </li>
          ))}
        </ul>
      </section>
    </S.Container>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended')
  const recommendedProducts = await response.json()

  return {
    props: {
      recommendedProducts
    }
  }
}
 