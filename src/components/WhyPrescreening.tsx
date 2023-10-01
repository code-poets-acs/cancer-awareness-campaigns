import Grid from '@mui/material/Grid'

function WhyPrescreening() {
  const gridStyle = {
    padding: '15px',
    textAlign: 'center',
    border: '1px solid black',

  }
  const gridStyleHeader = {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid black',
    FontFace: 'bold'

  }
  return (
    <Grid>
      <Grid container>
        <Grid item xs={3} style={gridStyleHeader}>
          <b> {`$0 cost to your organization`}</b>
        </Grid>
        <Grid item xs={3} style={gridStyleHeader}>
          {`Less time away from ${'the office'}`}
        </Grid>
        <Grid item xs={3} style={gridStyleHeader}>
          {'American Cancer Society handles all aspects of the #GetScreened initiative'}
        </Grid>
        <Grid item xs={3} style={gridStyleHeader}>
          {'Wellness for your employees'}
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={3} style={gridStyle}>
          {'Organizations can host a much needed service for their employees at zero cost'}
        </Grid>
        <Grid item xs={3} style={gridStyle}>
          {'On average, employers lose a half day to a full day of work for each appointment an employee makes with a doctor. With American Cancer Society tools, employees are connected with a variety of local providers and emerging ways to maximize opportunities for increasing screening and access to cancer care.'}
        </Grid>
        <Grid item xs={3} style={gridStyle}>
          {'American Cancer Society team members provided one-to-one strategic support, educational materials, training and technical assistance, tools, and the latest research to maximize outcomes'}
        </Grid>
        <Grid item xs={3} style={gridStyle}>
          {'In the US, an estimated 41 out of 100 men and 39 out of 100 women will develop cancer during their lifetime.  Cancer is a disease that affects everyone, but it doesn’t affect everyone equally. We are working to ensure everyone has an opportunity to prevent, detect, treat, and survive cancer.'}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default WhyPrescreening
