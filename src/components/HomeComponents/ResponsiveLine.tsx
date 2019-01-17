import { ResponsiveLine } from '@nivo/line';
import * as React from 'react';

import CButton from '../Button/CButton';
import './index.css';

/**
 * Defauilt Error Handler component in application level
 * to show fallback UI.
 */
class ResponsiveLineChart extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [
        {
          color: 'hsl(211, 70%, 50%)',
          data: [
            {
              x: 'plane',
              y: 3
            },
            {
              x: 'helicopter',
              y: 5
            },
            {
              x: 'boat',
              y: 8
            }
          ],
          id: 'japan'
        },
        {
          color: 'hsl(235, 70%, 50%)',
          data: [
            {
              x: 'plane',
              y: 1
            },
            {
              x: 'helicopter',
              y: 2
            },
            {
              x: 'boat',
              y: 3
            }
          ],
          id: 'france'
        }
      ]
    };
  }

  public render() {
    // tslint:disable:object-literal-sort-keys
    return (
      <div>
        <div className="row">
          <div className="col-md-6 p-0">
            <h4 className="chartHead">Ticket Trends</h4>
          </div>
          <div className="col-md-6 text-right p-0">
            <CButton
              className="btn btn-primary"
              name="View full status"
            />
          </div>
        </div>
        <div className="lineChart" key="1">
        <ResponsiveLine
          data={this.state.data}
          margin={{ 'top': 50, 'right': 110, 'bottom': 50, 'left': 60 }}
          xScale={{ 'type': 'point' }}
          yScale={{
            'type': 'linear',
            'min': 'auto',
            'max': 'auto',
            'stacked': true
         }}
          minY="auto"
          maxY="auto"
          stacked={true}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            'orient': 'bottom',
            'tickSize': 5,
            'tickPadding': 5,
            'tickRotation': 0,
            'legend': 'transportation',
            'legendOffset': 36,
            'legendPosition': 'middle'
          }}
          axisLeft={{
            'orient': 'left',
            'tickSize': 5,
            'tickPadding': 5,
            'tickRotation': 0,
            'legend': 'count',
            'legendOffset': -40,
            'legendPosition': 'middle'
          }}
          dotSize={10}
          dotColor="inherit:darker(0.3)"
          dotBorderWidth={2}
          dotBorderColor="#ffffff"
          enableDotLabel={true}
          dotLabel="y"
          dotLabelYOffset={-12}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[ {
           'anchor': 'top',
           'direction': 'row',
           'justify': false,
           'translateX': 100,
           'translateY': 0,
           'itemsSpacing': 0,
           'itemDirection': 'left-to-right',
           'itemWidth': 80,
           'itemHeight': 20,
           'itemOpacity': 0.75,
           'symbolSize': 12,
           'symbolShape': 'circle',
           'symbolBorderColor': 'rgba(0, 0, 0, .5)',
           'effects': [ {
             'on': 'hover',
             'style': { 'itemBackground': 'rgba(0, 0, 0, .03)', 'itemOpacity': 1 }
            }]}
          ]}
        />
        </div>
      </div>
    );
  }
}

export default ResponsiveLineChart;
