using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace MaterialCtrl.Migrations
{
    public partial class RevisedMaterialEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Materials",
                newName: "PartNumber");

            migrationBuilder.AddColumn<int>(
                name: "Category",
                table: "Materials",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ManufacturerId",
                table: "Materials",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ManufacturerItemNumber",
                table: "Materials",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Notes",
                table: "Materials",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PartName",
                table: "Materials",
                maxLength: 250,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "ProcurementType",
                table: "Materials",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Revision",
                table: "Materials",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Manufacturer",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreatedById = table.Column<string>(nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    ModifiedById = table.Column<string>(nullable: true),
                    ModifiedOn = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Notes = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Manufacturer", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Manufacturer_AspNetUsers_CreatedById",
                        column: x => x.CreatedById,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Manufacturer_AspNetUsers_ModifiedById",
                        column: x => x.ModifiedById,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Materials_ManufacturerId",
                table: "Materials",
                column: "ManufacturerId");

            migrationBuilder.CreateIndex(
                name: "IX_Manufacturer_CreatedById",
                table: "Manufacturer",
                column: "CreatedById");

            migrationBuilder.CreateIndex(
                name: "IX_Manufacturer_ModifiedById",
                table: "Manufacturer",
                column: "ModifiedById");

            migrationBuilder.AddForeignKey(
                name: "FK_Materials_Manufacturer_ManufacturerId",
                table: "Materials",
                column: "ManufacturerId",
                principalTable: "Manufacturer",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Materials_Manufacturer_ManufacturerId",
                table: "Materials");

            migrationBuilder.DropTable(
                name: "Manufacturer");

            migrationBuilder.DropIndex(
                name: "IX_Materials_ManufacturerId",
                table: "Materials");

            migrationBuilder.DropColumn(
                name: "Category",
                table: "Materials");

            migrationBuilder.DropColumn(
                name: "ManufacturerId",
                table: "Materials");

            migrationBuilder.DropColumn(
                name: "ManufacturerItemNumber",
                table: "Materials");

            migrationBuilder.DropColumn(
                name: "Notes",
                table: "Materials");

            migrationBuilder.DropColumn(
                name: "PartName",
                table: "Materials");

            migrationBuilder.DropColumn(
                name: "ProcurementType",
                table: "Materials");

            migrationBuilder.DropColumn(
                name: "Revision",
                table: "Materials");

            migrationBuilder.RenameColumn(
                name: "PartNumber",
                table: "Materials",
                newName: "Name");
        }
    }
}
