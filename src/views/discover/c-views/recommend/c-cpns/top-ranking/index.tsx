import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { shallowEqualApp, useAppSelector } from '@/store'
import TopRankingItem from '../top-ranking-item'

interface Iprops {
  children?: ReactNode
}

const TopRanking: FC<Iprops> = () => {
  const { rankings = [] } = useAppSelector(
    (state) => ({
      rankings: state.recommend.rankings
    }),
    shallowEqualApp
  )

  console.log(rankings)

  return (
    <TopRankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/disciver/ranking"></AreaHeaderV1>
      <div className="content">
        {rankings.map((item) => {
          return <TopRankingItem key={item.id} itemData={item} />
        })}
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
