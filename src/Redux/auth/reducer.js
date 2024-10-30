

const initalState = {
    isLoading:false,
    isError:false,
}

export const reducer = (state=initalState,action)=>{
    const {type,payload} = action;

    switch(type){

        default :{
            return state
        }
    }
}