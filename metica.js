{
  "category": "CUSTOM",
  "dashboardFilters": [],
  "displayName": "New Dashboard - mar 22, 2023 7:19",
  "labels": {},
  "mosaicLayout": {
    "columns": 12,
    "tiles": [
      {
        "height": 4,
        "widget": {
          "title": "Metric bytes ingested for 1 [MEAN]",
          "xyChart": {
            "chartOptions": {
              "mode": "COLOR"
            },
            "dataSets": [
              {
                "minAlignmentPeriod": "60s",
                "plotType": "STACKED_AREA",
                "targetAxis": "Y1",
                "timeSeriesQuery": {
                  "apiSource": "DEFAULT_CLOUD",
                  "timeSeriesFilter": {
                    "aggregation": {
                      "alignmentPeriod": "60s",
                      "crossSeriesReducer": "REDUCE_NONE",
                      "perSeriesAligner": "ALIGN_RATE"
                    },
                    "filter": "metric.type=\"monitoring.googleapis.com/billing/bytes_ingested\" resource.type=\"global\" metric.label.\"metric_domain\"=monitoring.regex.full_match(\"1\")",
                    "secondaryAggregation": {
                      "alignmentPeriod": "60s",
                      "crossSeriesReducer": "REDUCE_NONE",
                      "perSeriesAligner": "ALIGN_MEAN"
                    }
                  }
                }
              }
            ],
            "thresholds": [],
            "timeshiftDuration": "0s",
            "yAxis": {
              "label": "",
              "scale": "LINEAR"
            }
          }
        },
        "width": 11,
        "xPos": 0,
        "yPos": 0
      },
      {
        "height": 4,
        "widget": {
          "alertChart": {
            "name": ""
          }
        },
        "width": 6,
        "xPos": 0,
        "yPos": 4
      }
    ]
  }
}
