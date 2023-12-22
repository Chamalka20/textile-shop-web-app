package com.entities;

public class product {

	private String name;
	private String desc;
	private String price;
	private String image;
	private String salles;
	private String saleActive;
	private String saleName;
	private String salePercentage;
	private String quantity;
	private String category;
	private String small;
	private String medium;
	private String large;
	private String XL;
	private String add_date;
	private String size_id;
	
	
	
	public product(String name, String desc, String price, String image, String salles, String saleActive,
			String saleName, String salePercentage, String quantity, String category, String small, String medium,
			String large, String xL, String add_date, String size_id) {
		super();
		this.name = name;
		this.desc = desc;
		this.price = price;
		this.image = image;
		this.salles = salles;
		this.saleActive = saleActive;
		this.saleName = saleName;
		this.salePercentage = salePercentage;
		this.quantity = quantity;
		this.category = category;
		this.small = small;
		this.medium = medium;
		this.large = large;
		this.XL = xL;
		this.add_date = add_date;
		this.size_id = size_id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getSalles() {
		return salles;
	}
	public void setSalles(String salles) {
		this.salles = salles;
	}
	public String getSaleActive() {
		return saleActive;
	}
	public void setSaleActive(String saleActive) {
		this.saleActive = saleActive;
	}
	public String getSaleName() {
		return saleName;
	}
	public void setSaleName(String saleName) {
		this.saleName = saleName;
	}
	/**
	 * @return the salePercentage
	 */
	public String getSalePercentage() {
		return salePercentage;
	}
	/**
	 * @param salePercentage the salePercentage to set
	 */
	public void setSalePercentage(String salePercentage) {
		this.salePercentage = salePercentage;
	}
	/**
	 * @return the quantity
	 */
	public String getQuantity() {
		return quantity;
	}
	/**
	 * @param quantity the quantity to set
	 */
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	/**
	 * @return the category
	 */
	public String getCategory() {
		return category;
	}
	/**
	 * @param category the category to set
	 */
	public void setCategory(String category) {
		this.category = category;
	}
	/**
	 * @return the small
	 */
	public String getSmall() {
		return small;
	}
	/**
	 * @param small the small to set
	 */
	public void setSmall(String small) {
		this.small = small;
	}
	/**
	 * @return the medium
	 */
	public String getMedium() {
		return medium;
	}
	/**
	 * @param medium the medium to set
	 */
	public void setMedium(String medium) {
		this.medium = medium;
	}
	/**
	 * @return the large
	 */
	public String getLarge() {
		return large;
	}
	/**
	 * @param large the large to set
	 */
	public void setLarge(String large) {
		this.large = large;
	}
	/**
	 * @return the xL
	 */
	public String getXL() {
		return XL;
	}
	/**
	 * @param xL the xL to set
	 */
	public void setXL(String xL) {
		XL = xL;
	}
	/**
	 * @return the add_date
	 */
	public String getAdd_date() {
		return add_date;
	}
	/**
	 * @param add_date the add_date to set
	 */
	public void setAdd_date(String add_date) {
		this.add_date = add_date;
	}
	/**
	 * @return the size_id
	 */
	public String getSize_id() {
		return size_id;
	}
	/**
	 * @param size_id the size_id to set
	 */
	public void setSize_id(String size_id) {
		this.size_id = size_id;
	}
	
	
	
	
	
	
}
