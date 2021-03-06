import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';

import PageHeader from '../PageHeader';

const useStylesGrid = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    height: "90%",
    width: "100%",
    padding: "5%",
	background: "bg-light"
  },
  paper: {
    padding: "2% 5% 5% 5%",
    width: "auto",
    margin: "auto",
    color: theme.palette.primary.contrastText
  },
  media: {
    height: "auto",
    width: '100%',
    margin: 'auto'
  }
}));

export default function CenteredGrid() {
  	const classes = useStylesGrid();

  return (
    <div className="bg-light">
		<PageHeader 
                    title="Initiatives" 
                    description="We have taken multiple steps for keeping up with research and interacting with the student community of IITG. These include webinars with notable Alumni or Professors,weekly paper discussions and tutorials of the latest techniques, conduction of learning sessions followed with hackathons and participation in external data science competitions."
                    backgroundImage="initiatives/Initiatives_head.png"
        />
		<div className={classes.root}>
			<Paper item sm={12} md={6} className={classes.paper} elevation={3}> 
				{/*<section class="page-section bg-light" id="team">
					<div class="container">
						<div class="text-center">
							<h1 class="section-heading text-uppercase">INITIATIVES</h1>
						</div>

					</div>
				</section>
				<br />*/}
				<Grid container spacing={6} justify="center" alignItems="center">
					<Grid item sm={12} md={6} style={{ display: "flex"}}>
						<Card className={classes.root}>
							<CardActionArea>
								<Link to='/interIIT'>
									<CardMedia
										className={classes.media}
										component="img"
										image="/img/initiatives/InterIIT_Heading.png"
										title="Inter IIT Tech Meet"
									/>
								</Link>

								<CardContent>
									<Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
										Inter IIT Tech Meet
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										
									</Typography>
								</CardContent>

							</CardActionArea>

							{/*<CardActions>
								<Link to='/interIIT'>
									<Button size="small" color="primary">
									Learn More
									</Button>
								</Link>
							</CardActions>*/}
						</Card>
					</Grid>

					<Grid item sm={12} md={6} style={{ display: "flex" }} padding={20}>
						<Card className={classes.root}>
							<CardActionArea>
								<Link to='/alumni'>
								<CardMedia
									className={classes.media}
									component="img"
									image="/img/initiatives/Interactions_Heading1.jpg"
									title="Alumni Interactions"
								/>
								</Link>

								<CardContent>
									<Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
										Alumni Interactions
									</Typography>

									<Typography variant="body2" color="textSecondary" component="p">
										
									</Typography>
								</CardContent>
							</CardActionArea>

							{/*<Link to='/alumni'>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</Link>*/}
						</Card>
					</Grid>


					<Grid item sm={12} md={6} style={{ display: "flex" }}>
						<Card className={classes.root}>
							<CardActionArea>
								<a href="http://github.com/IITGuwahati-AI/Paper-discussions?fbclid=IwAR2QALPpEMnlmfUXMEdOw4byVvMGUkm0AWyDtc_5t6uUjKyWe4HDO5SMSzY">
									{/*<Link to='http://github.com/IITGuwahati-AI/Paper-discussions?fbclid=IwAR2QALPpEMnlmfUXMEdOw4byVvMGUkm0AWyDtc_5t6uUjKyWe4HDO5SMSzY'>*/}
									<CardMedia
										className={classes.media}
										component="img"
										image="/img/project/Discussions.jpg"
										title="Paper Discussions"
									/>
									{/*</Link>*/}
									</a>

								<CardContent>
									<Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
										Paper Discussions
									</Typography>

									<Typography variant="body2" color="textSecondary" component="p">
										
									</Typography>
								</CardContent>
							</CardActionArea>
	
							{/*<a href="http://github.com/IITGuwahati-AI/Paper-discussions?fbclid=IwAR2QALPpEMnlmfUXMEdOw4byVvMGUkm0AWyDtc_5t6uUjKyWe4HDO5SMSzY">
								<Button size="small" color="primary">
								  Learn More
								</Button>
							</a>*/}
						</Card>
					</Grid>


					<Grid item sm={12} md={6} style={{ display: "flex" }}>
						<Card className={classes.root}>
							<CardActionArea>
								<Link to='/hackathons'>
									<CardMedia
										className={classes.media}
										component="img"
										image="/img/project/Hackathon3.jpg"
										title="Hackathons"
									/>
								</Link>

								<CardContent>
									<Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
										Hackathons & Workshops
									</Typography>

									<Typography variant="body2" color="textSecondary" component="p">
										
									</Typography>
								</CardContent>
							</CardActionArea>

							{/*<CardActions>
								<Link to='/hackathons'>
									<Button size="small" color="primary">
										Learn More
									</Button>
								</Link>
							</CardActions>*/}
						</Card>
					</Grid>
					
				</Grid>
			</Paper>
		</div>
    </div>
  );
}
