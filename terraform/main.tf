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
    key            = "widget/terraform.tfstate"
    dynamodb_table = "andrewronscki-devops-terraform-state"
    region         = "us-east-1"
    profile        = "default"
  }
}

provider "aws" {
  region  = "us-east-1"
  profile = "default"
}


