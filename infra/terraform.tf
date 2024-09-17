provider "aws" {
  region = "us-east-1"  # Change this to your desired region
}

resource "aws_s3_bucket" "bucket-diecaband-activarti" {
  bucket = "diecaband-activarti"
}

resource "aws_s3_bucket" "bucket-diecaband-public-activarti" {
  bucket = "diecaband-public-activarti"
}

resource "aws_sns_topic" "activarti-topic" {
  name = "activarti-topic"
}

resource "aws_cloudwatch_metric_alarm" "s3_zip_upload_alarm" {
  alarm_name          = "S3-Zip-Upload-Alarm"
  comparison_operator = "LessThanThreshold"
  evaluation_periods  = "1"  # Check every period
  metric_name         = "PostRequests"
  namespace           = "AWS/S3"
  period              = "300" # Check every 5 minutes
  statistic           = "Sum"
  threshold           = "0"   # Trigger if no uploads occur
  alarm_description   = "Alarm when no ZIP files are uploaded to S3 uploads/ folder."
  alarm_actions       = [aws_sns_topic.activarti-topic.arn]
  dimensions = {
    BucketName = aws_s3_bucket.bucket-diecaband-activarti.id
    StorageType = "AllStorageTypes"
  }
}

resource "aws_s3_bucket_notification" "bucket_notification" {
  bucket = aws_s3_bucket.bucket-diecaband-activarti.id

  topic {
    topic_arn = aws_sns_topic.activarti-topic.arn
    events    = ["s3:ObjectCreated:*"]
    filter_prefix = "zips/"  # Only trigger for objects in the 'uploads/' folder
  }
}