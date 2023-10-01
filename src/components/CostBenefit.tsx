/* eslint-disable react/no-unescaped-entities */
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { useState } from 'react'

const INDUSTRIES = {
  Technology: 105000,
  'Healthcare and Pharmaceuticals': 90000,
  'Finance and Banking': 115000,
  Manufacturing: 75000,
  Energy: 90000,
  Retail: 45000,
  Automotive: 67500,
  'Aerospace and Defense': 100000,
  Telecommunications: 90000,
  'Entertainment and Media': 65000,
  'Real Estate': 65000,
  'Transportation and Logistics': 65000,
  'Hospitality and Tourism': 40000,
  'Food and Beverage': 50000,
  Education: 60000,
  Construction: 60000,
  Pharmaceuticals: 100000,
  Biotechnology: 90000,
  'Environmental Services': 60000,
  'Mining and Natural Resources': 75000
}
const TREATMENT_COST = 140000
const HOSPITAL_COST = 50000
const YEARS_SAVED = 7.6

const formatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short',
  style: 'currency',
  currency: 'USD'
})

const textStyle = {
  fontSize: '14pt'
}

export default function CostBenefit() {
  const [employees, setEmployees] = useState(30)
  const [industry, setIndustry] = useState<keyof typeof INDUSTRIES>('Retail')
  return (
    <Grid container alignItems='center'>
      <Grid item xs={12}>
        <Typography variant='h3'><b>What is #GetScreened Worth?</b></Typography>
        <br></br>
        <Typography style={textStyle}>
          Estimating the monetary value of pre-screening for cancer requires a multifaceted approach that considers both
          direct and indirect cost implications. At the direct level, savings emerge from differences in treatment costs
          between early and late-stage diagnoses. Early detection often means less aggressive and thus less expensive
          treatments, potentially saving thousands or even tens of thousands of dollars per individual. Beyond
          treatment, early-stage diagnoses can result in shorter hospital stays or even outpatient procedures, leading
          to further direct cost savings. Indirectly, the value extends to the preservation or minimal disruption of a
          patient's earning capacity. Detecting cancer early can reduce treatment time, allowing individuals to return
          to work faster and contribute to the economy. Additionally, societal savings come into play when considering
          the broader healthcare system—fewer resource-intensive treatments mean reduced strain on medical facilities
          and staff. It's also important to acknowledge the harder-to-quantify value derived from an individual's
          improved quality of life, the potential decrease in family caregiving needs, and the emotional wellbeing of
          patients and their families, which, while not directly translatable to a dollar amount, undeniably carry
          significant worth.
        </Typography>
        <br></br>
        <p style={textStyle}>Get a personalized estimate of the direct value for your organization:</p>
      </Grid>
      <Grid item xs={3} pt={3}>
        <FormControl fullWidth>
          <InputLabel id='demo-select-small-label'>Industry</InputLabel>
          <Select
            label='Industry'
            value={industry}
            onChange={e => setIndustry(e.target.value as keyof typeof INDUSTRIES)}
          >
            {Object.keys(INDUSTRIES).map(industry => {
              return (
                <MenuItem key={industry} value={industry}>
                  {industry}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3} pt={3} px={3}>
        <FormControl fullWidth>
          <InputLabel id='demo-select-small-label'>Company Size</InputLabel>
          <Select
            label='Company Size'
            value={employees}
            onChange={e => setEmployees(parseInt(e.target.value.toString()))}
          >
            <MenuItem value={30}>Small (~30 employees)</MenuItem>
            <MenuItem value={150}>Medium (~150 employees)</MenuItem>
            <MenuItem value={625}>Large (~625 employees)</MenuItem>
            <MenuItem value={2000}>Enterprise (~2,000 employees)</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3} pt={3}>
        <Typography variant='h4'>
          {' '}
          ~={' '}
          <b>{formatter.format((TREATMENT_COST + HOSPITAL_COST + YEARS_SAVED * INDUSTRIES[industry]) * employees)}</b>
        </Typography>
      </Grid>
      <Grid item xs={12} pt={3}>
        <Typography style={textStyle}>
          This number is calculated using the following model per employee:{' '}
          <i>
            Value<sub>pre-screening</sub> = (T<sub>late</sub> - T<sub>early</sub>) + (H<sub>late</sub> - H
            <sub>early</sub>) + L &times; Y
          </i>
        </Typography>
        <br></br>
        <p>Where:</p>
        <br></br>
        <ul>
          <li>
            <i>
              T<sub>late</sub>
            </i>{' '}
            and{' '}
            <i>
              T<sub>early</sub>
            </i>{' '}
            = Average treatment costs for late-stage and early-stage cancer, respectively. The difference represents the
            treatment savings due to pre-screening and early detection. <b> ~{formatter.format(TREATMENT_COST)}</b>
          </li>
          <li>
            <i>
              H<sub>late</sub>
            </i>{' '}
            and{' '}
            <i>
              H<sub>early</sub>
            </i>{' '}
            = Average hospitalization costs for late-stage and early-stage cancer, respectively. The difference
            represents the hospitalization savings due to pre-screening. <b> ~{formatter.format(HOSPITAL_COST)}</b>
          </li>
          <li>
            <i>L</i> = Average yearly earnings of an individual. This component helps in estimating the economic value
            saved due to reduced work disruption from early detection. <b> ~{formatter.format(INDUSTRIES[industry])}</b>
          </li>
          <li>
            <i>Y</i> = Estimated average additional years of life or productivity gained through early detection.{' '}
            <b> ~{YEARS_SAVED}</b>
          </li>
        </ul>
      </Grid>
    </Grid>
  )
}
