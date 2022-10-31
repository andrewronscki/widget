locals {
  common_tags = {
    Name        = "My bucket"
    Environment = terraform.workspace == "default" ? "dev" : terraform.workspace
    UpdatedAt = timestamp()
    ManagedBy = "Terraform"
  }
}
