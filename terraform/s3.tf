resource "aws_s3_bucket" "this" {
  bucket = "aw-widget-bucket" // nome do seu bucket na aws

  tags = {
    Name        = "My bucket"
    Environment = "Dev"
  }
}

resource "aws_s3_bucket_acl" "this" {
  bucket = aws_s3_bucket.this.id
  acl    = "public-read" // acesso público para seu bucket
}