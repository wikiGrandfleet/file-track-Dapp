import Dashboard from './Dashboard'
import { drizzleConnect } from 'drizzle-react'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    contracts: state.contracts,
    drizzleStatus: state.drizzleStatus
  }
}

const DashboardContainer = drizzleConnect(Dashboard, mapStateToProps)

export default DashboardContainer
