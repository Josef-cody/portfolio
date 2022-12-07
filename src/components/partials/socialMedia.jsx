import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function SocialMedia() {
  return (
    <ButtonGroup vertical>
      <Button className='socialButton'><a href='https://www.facebook.com/yusuf.swe'><i class="fa-brands fa-square-facebook socialButtonIcon"></i></a></Button>
      <Button className='socialButton'><a href='https://m.me/yusuf.swe'><i class="fa-brands fa-facebook-messenger socialButtonIcon"></i></a></Button>
      <Button className='socialButton'><a href='https://www.instagram.com/josef_ablz'><i class="fa-brands fa-square-instagram socialButtonIcon"></i></a></Button>
      <Button className='socialButton'><a href='https://www.linkedin.com/in/josef-abliz'><i class="fa-brands fa-linkedin socialButtonIcon"></i></a></Button>
      <Button className='socialButton'><a href='https://github.com/Josef-cody'><i class="fa-brands fa-square-github socialButtonIcon"></i></a></Button>
      </ButtonGroup>
      )
}
 export default SocialMedia