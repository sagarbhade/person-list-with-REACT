import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
const Person = ({ img, name, job, gender, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/${gender}/${img}.jpg`
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  )
}

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="john" job="developer" gender="men" />
      <Person img="65" name="maria" job="designer" gender="women">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          tempora!
        </p>
      </Person>
      <Person img="61" name="david" job="CEO" gender="men" />
      <Person img="75" name="juan" job="manager" gender="men" />
    </section>
  )
}

ReactDOM.render(<PersonList />, document.getElementById('root'))
