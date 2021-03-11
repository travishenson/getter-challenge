import './style.css';

export default function Card(props) {
  return (
    <div className='card'>
      <div className='inner-card'>
        <img 
          className='profile-photo' 
          src={props.photo} 
          alt={`${props.name} profile photo`} 
        />
        <h2>{props.name}</h2>
      </div>
    </div>
  )
} 