import React  from 'react';
import "../Css/Profile.css";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

function Profile() {


    const icons_edit={
        width:"36px",
        height:"36px",
        color:"#ffff"


    };
    

  return (
<><section className="profile">
    <div className="titlebox">
        <h1>Profile</h1>
        <button>Log in</button>
    </div>,
   <div className="middleContent">
   <div className="icons">
    <FavoriteIcon style={icons_edit}
    />
     <InsertEmoticonIcon style={icons_edit}/>
    <AcUnitIcon style={icons_edit}/>
    <AccessAlarmsIcon style={icons_edit}/>

</div>

   <p>
    Create an account to save your Progress and see your stats
   </p>
<button>Sign up or Login</button>
   </div>
   </section>
   </>
  );
}

export default Profile;
