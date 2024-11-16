package minhanthonytat.calenderbackend.event;

import java.util.Date;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

public class EventCreateDTO {
  @Getter
	@Setter
  @NotBlank
  private String name;

	@Getter
	@Setter
  @NotNull
  private Date startDate;

	@Getter
	@Setter
  @NotNull
  private Date endDate;

	@Getter
	@Setter
  @NotBlank
  private String location;

	@Getter
	@Setter
  @NotBlank
  private String label;

  public EventCreateDTO(String name, Date startDate, Date endDate, String location, String label){
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.label = label;
  }
}
