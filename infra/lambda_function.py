import json
import uuid
from datetime import datetime
import zipfile
from io import BytesIO

def lambda_handler(event, context):
    try:
        s3 = boto3.client('s3')
        
        # Get the ZIP file from the event
        bucket = event['Records'][0]['s3']['bucket']['name']
        key = event['Records'][0]['s3']['object']['key']
        
        # Download the ZIP file
        obj = s3.get_object(Bucket=bucket, Key=key)
        buffer = BytesIO(obj['Body'].read())
        
        # Unzip the contents
        with zipfile.ZipFile(buffer) as zip_ref:
            for info in zip_ref.infolist():
                if not info.is_dir():
                    # Extract each file to the target S3 bucket
                    target_bucket = 'diecaband-public-activarti'
                    target_key = f"{info.filename}"
                    zip_ref.extract(info.filename, '/tmp/')
                    s3.upload_file(f"/tmp/{info.filename}", target_bucket, target_key)
                    
        
        dynamodb = boto3.resource('dynamodb')
        def create_item():
            table = dynamodb.table('activarti-zip')
            item = {
                'id': uuid.uuid4(),
                'date': datetime.now().date(),
                'bucket': bucket,
            }
    except zipfile.BadZipFile:
        return {
            'statusCode': 500,
            'body': json.dumps('BadZipFile!')
        }
    except s3.exceptions.NoSuchKey:
        return {
            'statusCode': 500,
            'body': json.dumps('NoSuchKey!')
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps("An unexpected error ocurred: {str(e)}")
        }
        
    return {
        'statusCode': 200,
        'body': json.dumps('Unzip completed!')
    }
