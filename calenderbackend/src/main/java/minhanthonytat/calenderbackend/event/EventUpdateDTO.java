package minhanthonytat.calenderbackend.event;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

public class EventUpdateDTO {
  @Getter
	@Setter
  private String name;

	@Getter
	@Setter
  private Date startDate;

	@Getter
	@Setter
  private Date endDate;

	@Getter
	@Setter
  private String location;

	@Getter
	@Setter
  private Long labelId;
}
