package minhanthonytat.calenderbackend.event;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import minhanthonytat.calenderbackend.label.Label;

@Entity
@Table(name = "event")
public class Event {

  @Getter
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

  @Column
	@Getter
	@Setter
  private String name;

  @Column
	@Getter
	@Setter
  private Date startDate;

  @Column
	@Getter
	@Setter
  private Date endDate;

  @Column
	@Getter
	@Setter
  private String location;

  @ManyToOne
  @JoinColumn(name = "label")
  @Getter
  @Setter
  private Label label;

  public Event(){}

  public Event(String name, Date startDate, Date endDate, String location,Label label){
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.label = label;
  }
}
