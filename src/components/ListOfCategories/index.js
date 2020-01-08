import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index'
import { List, Item } from './styles'
import { CategoryLoader } from '../Loader/CategoryLoader'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window
      .fetch('https://instapet-server-hzxo40qb3.now.sh/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()

  const [showFixed, setShowFixed] = useState(false)

  useEffect(
    function () {
      const onScroll = e => {
        const newShowField = window.scrollY > 200
        showFixed !== newShowField && setShowFixed(newShowField)
      }

      document.addEventListener('scroll', onScroll)

      return () => document.removeEventListener('scroll', onScroll)
    },
    [showFixed]
  )

  const renderList = fixed => (
    <List fixed={fixed}>
      {categories.map(category => {
        if (loading) {
          return <CategoryLoader key={category.id} />
        }
        return (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        )
      })}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
