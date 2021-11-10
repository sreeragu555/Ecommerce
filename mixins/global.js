export default{
    data(){
        return{
            Userobj:{}
        }
    },
    computed:{
        getUserdetails(){
            this.$fire.firestore.collection('Users').doc(this.$store.state.Auth.user.uid).get().then(snapshot => {
                   Userobj=snapshot.data();
          });
        }
    }
};