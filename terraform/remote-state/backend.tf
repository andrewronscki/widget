terraform {
  required_version = "1.3.3"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
  backend "s3" {
    bucket         = "andrewronscki-devops-terraform-state"
    key            = "global/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "andrewronscki-devops-terraform-state"
    profile        = "default"
  }
}
provider "aws" {
  profile = var.aws_profile
  region  = var.aws_region
}
