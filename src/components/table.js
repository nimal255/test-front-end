import React  from 'react'
import DataTable from "react-data-table-component"
import {
  Card,
  CardBody,
} from "reactstrap"

  
  class Table extends React.Component {

    render() {
      return (
        <div>
          <Card className="order_card">
            <CardBody>
              <DataTable 
                responsive
                data={this.props.data} 
                columns={this.props.columns} 
                noHeader
                style={{textTransform: 'uppercase'}}
              />
            </CardBody>
          </Card>
        </div>
      );
    }
  }
  
  export default Table;
  
