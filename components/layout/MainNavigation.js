import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}> SnapDiary </div>
      {/* <img className={classes.image} src="album.jpeg"></img> */}
      <nav>
        <ul>
          <li>
            <Link href='/'>All Snaps </Link>
          </li>
          <li>
            <Link href='/newSnap'>Add New Snap</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;