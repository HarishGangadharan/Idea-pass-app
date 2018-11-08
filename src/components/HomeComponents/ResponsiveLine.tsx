import { ResponsiveLine } from '@nivo/line';
import * as React from 'react';

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
    return (
      <div>
        <div className="row">
          <div className="col-md-6 p-0">
            <h3 className="chartHead">Ticket Trends</h3>
          </div>
          <div className="col-md-6 text-right p-0">
            <button className="btn btn-primary">View full status</button>
          </div>
        </div>
        <div className="lineChart" key="1">
          <ResponsiveLine
            data={this.state.data}
            margin={{
              bottom: 50,
              left: 60,
              right: 110,
              top: 50
            }}
            xScale={{
              type: 'point'
            }}
            yScale={{
              max: 'auto',
              min: 'auto',
              stacked: true,
              type: 'linear'
            }}
            minY="auto"
            maxY="auto"
            stacked={true}
            aaxisTop={true}
            null={true}
            aaxisRight={true}
            axisBottom={{
              legend: 'transportation',
              legendOffset: 36,
              legendPosition: 'middle',
              orient: 'bottom',
              tickPadding: 5,
              tickRotation: 0,
              tickSize: 5
            }}
            axisLeft={{
              legend: 'count',
              legendOffset: -40,
              legendPosition: 'middle',
              orient: 'left',
              tickPadding: 5,
              tickRotation: 0,
              tickSize: 5
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
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemBackground: 'rgba(0, 0, 0, .03)',
                      itemOpacity: 1
                    }
                  }
                ],
                itemDirection: 'left-to-right',
                itemHeight: 20,
                itemOpacity: 0.75,
                itemWidth: 80,
                itemsSpacing: 0,
                justify: false,
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                symbolShape: 'circle',
                symbolSize: 12,
                translateX: 100,
                translateY: 0
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default ResponsiveLineChart;
