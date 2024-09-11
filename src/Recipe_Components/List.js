

const Lists = ({loading,error,recipes,frecipes,keyword}) =>{

    if(loading){
        return (
           <div style={{ minHeight: "100px", display: "flex", justifyContent: "center", alignItems: "center", paddingTop:"50px",paddingBottom: "50px" }}>
                <div classname="spinner-border" style={{ width: "100px", height: "100px" }}role="status">
                    <span classname="visually-hidden">Loading...</span>
                </div>
           </div>
        )
    }

    return (
        <>
            <div className="row  py-5" style={{ backgroundColor: "#F2F2F2 !important" }}>
                <div className="col-md-10 offset-md-1">
                    <h3 style={{ marginBottom: 30 }} className="text-center">
                    Recipes
                    </h3>
                    <div className="row">
                    {

                        keyword.length === 0 ?

                        recipes.length > 0 ? recipes.map((recipe,index) =>{
                            return (
                                <div className="col-md-4 my-4" key={index}>
                                    <img src={recipe.image} className="img-fluid" />
                                    <div className="descriptions pix">
                                    <h6>{recipe.name}</h6>
                                    <p>
                                        <b>Ingredients</b>: {
                                            recipe.ingredients.map((ig) =>{
                                                return (
                                                    <span> {ig} </span>
                                                )
                                            })
                                               
                                        }
                                    </p>
                                    </div>
                                </div>
                            )
                        }): <p>Recipes not avaliable</p>
                        :  frecipes.length > 0 ? frecipes.map((recipe,index) =>{
                            return (
                                <div className="col-md-4 my-4" key={index}>
                                    <img src={recipe.image} className="img-fluid" />
                                    <div className="descriptions pix">
                                    <h6>{recipe.name}</h6>
                                    <p>
                                        <b>Ingredients</b>: {
                                            recipe.ingredients.map((ig) =>{
                                                return (
                                                    <span> {ig} </span>
                                                )
                                            })
                                               
                                        }
                                    </p>
                                    </div>
                                </div>
                            )
                        }): <p>Recipes not avaliable</p>
                    }

                    </div>
                </div>
            </div>

        </>
    )
}

export default Lists 